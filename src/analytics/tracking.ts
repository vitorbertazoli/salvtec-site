type Primitive = string | number | boolean | null | undefined;

type EventParams = Record<string, Primitive>;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

const FIRST_TOUCH_KEY = 'salvtec_first_touch';

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

function getReferrerSource() {
  if (!document.referrer) {
    return 'direct';
  }

  try {
    return new URL(document.referrer).hostname;
  } catch {
    return 'unknown';
  }
}

function buildAttribution() {
  const params = new URLSearchParams(window.location.search);

  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');
  const utmTerm = params.get('utm_term');
  const utmContent = params.get('utm_content');
  const gclid = params.get('gclid');
  const fbclid = params.get('fbclid');

  return {
    source: utmSource || getReferrerSource(),
    medium: utmMedium || (utmSource ? 'utm' : 'organic_or_direct'),
    campaign: utmCampaign || 'not_set',
    term: utmTerm || undefined,
    content: utmContent || undefined,
    gclid: gclid || undefined,
    fbclid: fbclid || undefined,
  };
}

function getStoredFirstTouch() {
  try {
    const raw = localStorage.getItem(FIRST_TOUCH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setStoredFirstTouch(value: EventParams) {
  try {
    localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(value));
  } catch {
    return;
  }
}

export function initAttribution() {
  const current = buildAttribution();
  const hasCampaignSignal =
    current.campaign !== 'not_set' ||
    current.source !== 'direct' ||
    current.gclid ||
    current.fbclid;

  const firstTouch = getStoredFirstTouch();

  if (!firstTouch && hasCampaignSignal) {
    setStoredFirstTouch(current);
  }

  return {
    current,
    firstTouch: firstTouch || (hasCampaignSignal ? current : null),
  };
}

export function pushEvent(event: string, params: EventParams = {}) {
  ensureDataLayer();
  window.dataLayer.push({ event, ...params });
}

export function trackPageView(path: string, title: string) {
  const attribution = initAttribution();

  pushEvent('page_view_custom', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    source: attribution.current.source,
    medium: attribution.current.medium,
    campaign: attribution.current.campaign,
    first_source: attribution.firstTouch?.source,
    first_medium: attribution.firstTouch?.medium,
    first_campaign: attribution.firstTouch?.campaign,
  });
}

function classifyLink(linkUrl: string, linkText: string) {
  const lowerUrl = linkUrl.toLowerCase();
  const lowerText = linkText.toLowerCase();

  if (lowerUrl.includes('wa.me') || lowerUrl.includes('whatsapp')) {
    return 'whatsapp';
  }

  if (lowerUrl.includes('/carreiras') || lowerText.includes('carreira') || lowerText.includes('trabalhe')) {
    return 'careers';
  }

  if (lowerUrl.startsWith('mailto:')) {
    return 'email';
  }

  if (lowerUrl.includes('instagram.com')) {
    return 'social';
  }

  if (linkUrl.startsWith('#') || linkUrl.includes('/#')) {
    return 'nav';
  }

  if (linkUrl.startsWith('http')) {
    return 'external';
  }

  return 'internal';
}

function getSectionName(element: Element) {
  const section = element.closest('section, footer, header, nav, main, div[id]');
  const sectionId = section?.getAttribute('id');

  if (sectionId) {
    return sectionId;
  }

  return section?.tagName.toLowerCase() || 'unknown';
}

export function setupGlobalLinkTracking() {
  const clickHandler = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const anchor = target?.closest('a');

    if (!anchor) {
      return;
    }

    const href = anchor.getAttribute('href') || '';
    const absoluteHref = href.startsWith('http') || href.startsWith('mailto:')
      ? href
      : `${window.location.origin}${href.startsWith('/') ? href : `/${href}`}`;
    const text = (anchor.textContent || '').trim() || anchor.getAttribute('aria-label') || 'link';
    const linkType = classifyLink(href || absoluteHref, text);
    const section = getSectionName(anchor);

    pushEvent('link_click', {
      link_text: text,
      link_url: absoluteHref,
      link_type: linkType,
      section,
      page_path: window.location.pathname + window.location.search,
    });

    if (linkType === 'whatsapp') {
      pushEvent('whatsapp_click', {
        link_text: text,
        link_url: absoluteHref,
        section,
      });
    }

    if (linkType === 'careers') {
      pushEvent('careers_click', {
        link_text: text,
        link_url: absoluteHref,
        section,
      });
    }
  };

  document.addEventListener('click', clickHandler, true);

  return () => {
    document.removeEventListener('click', clickHandler, true);
  };
}
