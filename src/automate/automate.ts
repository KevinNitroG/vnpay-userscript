import {
  errorUrl,
  paymentMethodSelectorUrl,
  transactionConfirmPatternUrl,
  transactionPatternUrl,
} from "../constant/route";
import { card1 } from "../constant/card";

export function automate() {
  const current = window.location.href;
  if (current.startsWith(errorUrl)) {
    return;
  }
  if (current.startsWith(paymentMethodSelectorUrl)) {
    const selection = document.querySelector("button#NCB") as HTMLElement;
    if (!selection) {
      return;
    }
    selection.click();
  }
  if (transactionPatternUrl.test(current)) {
    const cardNumber = document.querySelector(
      "#card_number_mask",
    ) as HTMLInputElement;
    const cardHolder = document.querySelector(
      "#cardHolder",
    ) as HTMLInputElement;
    const cardDate = document.querySelector("#cardDate") as HTMLInputElement;
    const buttonContinue = document.querySelector(
      "#btnContinue",
    ) as HTMLAnchorElement;
    const agreeButton = document.querySelector(
      "#btnAgree",
    ) as HTMLAnchorElement;
    if (
      !cardNumber ||
      !cardHolder ||
      !cardDate ||
      !buttonContinue ||
      !agreeButton
    ) {
      return;
    }
    cardNumber.value = card1.detail.cardNumber;
    cardNumber.dispatchEvent(new Event("input", { bubbles: true }));
    cardNumber.dispatchEvent(new Event("change", { bubbles: true }));
    cardNumber.dispatchEvent(new Event("blur", { bubbles: true }));
    cardHolder.value = card1.detail.ownerName;
    cardDate.value = card1.detail.issueDate;
    buttonContinue.click();
    agreeButton.click();
  }
  if (transactionConfirmPatternUrl.test(current)) {
    const otpInput = document.querySelector("#otpvalue") as HTMLInputElement;
    const confirmButton = document.querySelector("#btnConfirm") as HTMLElement;
    if (!otpInput || !confirmButton) {
      return;
    }
    otpInput.value = card1.detail.otp || "";
    confirmButton.click();
  }
}
