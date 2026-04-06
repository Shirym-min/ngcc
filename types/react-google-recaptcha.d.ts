declare module "react-google-recaptcha" {
  import type { Component, RefObject } from "react";

  export type ReCAPTCHAProps = {
    sitekey: string;
    size?: "compact" | "invisible" | "normal";
    theme?: "dark" | "light";
    tabindex?: number;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
  };

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    executeAsync(): Promise<string | null>;
    reset(): void;
    execute(): void;
    getValue(): string | null;
    getWidgetId(): number;
  }

  export type ReCAPTCHAInstance = InstanceType<typeof ReCAPTCHA>;
  export type ReCAPTCHARef = RefObject<ReCAPTCHAInstance | null>;
}
