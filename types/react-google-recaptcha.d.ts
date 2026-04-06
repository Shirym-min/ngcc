declare module "react-google-recaptcha" {
  import type { Component, RefObject } from "react";

  export type ReCAPTCHAProps = {
    sitekey: string;
    size?: "compact" | "invisible" | "normal";
    theme?: "dark" | "light";
    tabindex?: number;
    onChange?: (token: string | null) => void;
    onErrored?: () => void;
    onExpired?: () => void;
  };

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    execute(): void;
    executeAsync(): Promise<string | null>;
    getValue(): string | null;
    getWidgetId(): number;
    reset(): void;
  }

  export type ReCAPTCHAInstance = InstanceType<typeof ReCAPTCHA>;
  export type ReCAPTCHARef = RefObject<ReCAPTCHAInstance | null>;
}
