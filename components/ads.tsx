"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    atOptions?: Record<string, unknown>;
  }
}

const NATIVE_BANNER_ID = "ffb1612828a6ef9e472347d222b2234b";
const NATIVE_BANNER_SRC = `https://pl31091105.profitableratecpmnetwork.com/${NATIVE_BANNER_ID}/invoke.js`;
const BOX_300_KEY = "40b567db94ddef4e11917de9995cac8d";
const BOX_300_SRC = `https://www.highrevenueformat.com/${BOX_300_KEY}/invoke.js`;

/**
 * Native banner. The invoke.js script scans for #container-{id} when it runs,
 * so it is injected client-side after the div exists — and re-injected on every
 * mount, because the static export serves each route as its own HTML document
 * but React client-side navigation replaces the div without re-running
 * scripts from the previous document.
 */
export function AdNativeBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = NATIVE_BANNER_SRC;
    host.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={ref} id={`container-${NATIVE_BANNER_ID}`} className="ad-native" />;
}

/**
 * 300x250 iframe banner. invoke.js reads the global `atOptions` when it loads,
 * so the config script must precede it inside the same container; both are
 * created via createElement (not dangerouslySetInnerHTML) so they also execute
 * after client-side navigation.
 */
export function AdBox300() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const conf = document.createElement("script");
    conf.text = [
      "atOptions = {",
      "  'key' : '" + BOX_300_KEY + "',",
      "  'format' : 'iframe',",
      "  'height' : 250,",
      "  'width' : 300,",
      "  'params' : {}",
      "};",
    ].join("\n");

    const invoke = document.createElement("script");
    invoke.src = BOX_300_SRC;

    host.append(conf, invoke);

    return () => {
      host.replaceChildren();
      delete window.atOptions;
    };
  }, []);

  return (
    <div ref={ref} className="ad-box300" style={{ width: 300, height: 250 }} />
  );
}
