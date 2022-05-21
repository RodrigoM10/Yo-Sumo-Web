import * as yup from "yup"

export const PetitionSchema = yup.object().shape({
    title : yup.string().min(4).max(20).required("titulo requerido").matches(/[A-Z]/, 'must contain one uppercase'),
    file: yup.mixed().required(),
    description:yup.string().max(1000).required(),
    name:yup.string().required(),
    cellphone:yup.number().required(),
    email:yup.string().email().required(),

})