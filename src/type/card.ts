export type CartNote =
  | "Thành công"
  | "Thẻ không đủ số dư"
  | "Thẻ chưa kích hoạt"
  | "Thẻ bị khóa"
  | "Thẻ bị hết hạn";

export type CartDetail = {
  ownerName: string;
  cardNumber: string;
};

export type InternationalCardDetail = CartDetail & {
  brand: "VISA" | "MasterCard" | "JCB" | string;
  threeDSecure: boolean;
  cvc: string;
  email: string;
  address: string;
  city: string;
  expiryDate: string;
};

export type DomesticCardDetail = CartDetail & {
  bank: "NCB" | string;
  issueDate: string;
  otp?: string;
};

export type InternationalCard = {
  index: number;
  detail: InternationalCardDetail;
  note?: CartNote;
};

export type DomesticCard = {
  index: number;
  detail: DomesticCardDetail;
  note?: CartNote;
};

export type Card = InternationalCard | DomesticCard;
