import { Card, DomesticCard, InternationalCard } from "../type/card";

export const card1: DomesticCard = {
  index: 1,
  detail: {
    bank: "NCB",
    cardNumber: "9704198526191432198",
    ownerName: "NGUYEN VAN A",
    issueDate: "07/15",
    otp: "123456",
  },
  note: "Thành công",
};

export const card2: DomesticCard = {
  index: 2,
  detail: {
    bank: "NCB",
    cardNumber: "9704195798459170488",
    ownerName: "NGUYEN VAN A",
    issueDate: "07/15",
  },
  note: "Thẻ không đủ số dư",
};

export const card3: DomesticCard = {
  index: 3,
  detail: {
    bank: "NCB",
    cardNumber: "9704192181368742",
    ownerName: "NGUYEN VAN A",
    issueDate: "07/15",
  },
  note: "Thẻ chưa kích hoạt",
};

export const card4: DomesticCard = {
  index: 4,
  detail: {
    bank: "NCB",
    cardNumber: "9704193370791314",
    ownerName: "NGUYEN VAN A",
    issueDate: "07/15",
  },
  note: "Thẻ bị khóa",
};

export const card5: DomesticCard = {
  index: 5,
  detail: {
    bank: "NCB",
    cardNumber: "9704194841945513",
    ownerName: "NGUYEN VAN A",
    issueDate: "07/15",
  },
  note: "Thẻ bị hết hạn",
};

export const card6: InternationalCard = {
  index: 6,
  detail: {
    brand: "VISA",
    threeDSecure: false,
    cardNumber: "4456530000001005",
    cvc: "123",
    ownerName: "NGUYEN VAN A",
    expiryDate: "12/26",
    email: "test@gmail.com",
    address: "22 Lang Ha",
    city: "Ha Noi",
  },
  note: "Thành công",
};

export const card7: InternationalCard = {
  index: 7,
  detail: {
    brand: "VISA",
    threeDSecure: true,
    cardNumber: "4456530000001096",
    cvc: "123",
    ownerName: "NGUYEN VAN A",
    expiryDate: "12/26",
    email: "test@gmail.com",
    address: "22 Lang Ha",
    city: "Ha Noi",
  },
  note: "Thành công",
};

export const card8: InternationalCard = {
  index: 8,
  detail: {
    brand: "MasterCard",
    threeDSecure: false,
    cardNumber: "5200000000001005",
    cvc: "123",
    ownerName: "NGUYEN VAN A",
    expiryDate: "12/26",
    email: "test@gmail.com",
    address: "22 Lang Ha",
    city: "Ha Noi",
  },
  note: "Thành công",
};

export const card9: InternationalCard = {
  index: 9,
  detail: {
    brand: "MasterCard",
    threeDSecure: true,
    cardNumber: "5200000000001096",
    cvc: "123",
    ownerName: "NGUYEN VAN A",
    expiryDate: "12/26",
    email: "test@gmail.com",
    address: "22 Lang Ha",
    city: "Ha Noi",
  },
  note: "Thành công",
};

export const card10: InternationalCard = {
  index: 10,
  detail: {
    brand: "JCB",
    threeDSecure: false,
    cardNumber: "3337000000000008",
    cvc: "123",
    ownerName: "NGUYEN VAN A",
    expiryDate: "12/26",
    email: "test@gmail.com",
    address: "22 Lang Ha",
    city: "Ha Noi",
  },
  note: "Thành công",
};

export const card11: InternationalCard = {
  index: 11,
  detail: {
    brand: "JCB",
    threeDSecure: true,
    cardNumber: "3337000000200004",
    cvc: "123",
    ownerName: "NGUYEN VAN A",
    expiryDate: "12/24",
    email: "test@gmail.com",
    address: "22 Lang Ha",
    city: "Ha Noi",
  },
  note: "Thành công",
};

export const cardMap = new Map<number, Card>([
  [card1.index, card1],
  [card2.index, card2],
  [card3.index, card3],
  [card4.index, card4],
  [card5.index, card5],
  [card6.index, card6],
  [card7.index, card7],
  [card8.index, card8],
  [card9.index, card9],
  [card10.index, card10],
  [card11.index, card11],
]);
