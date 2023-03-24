import * as Yup from "yup";

export const paymentSchema = Yup.object({
    cardnumber: Yup.string().min(16).max(16).required("Enter Your Card Number"),
    holdername: Yup.string().min(2).required("Please Enter Holder Name")
})