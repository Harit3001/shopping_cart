export function validateCustomer(customer) {
  if (!customer.name.trim()) {
    return "Vui lòng nhập họ tên";
  }

  if (!customer.phone.trim()) {
    return "Vui lòng nhập số điện thoại";
  }

  if (!customer.email.trim()) {
    return "Vui lòng nhập email";
  }

  if (!customer.address.trim()) {
    return "Vui lòng nhập địa chỉ";
  }

  return "";
}
