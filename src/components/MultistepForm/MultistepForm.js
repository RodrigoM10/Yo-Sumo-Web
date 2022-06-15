import React, { useState} from 'react';
import {
  Formik,
  Form,
} from 'formik';
import FormNavigation from './FormNavigation';
import { Stepper, Step } from '@material-ui/core';
import { StepLabel } from '@material-ui/core';

const FormTitles = [
  'Titulo de la petición',
  'Agregá una foto',
  'Contá tu historia',
  'Información personal',
  'Resumen de tu petición',
];

const FormSubtitles = [
  '¿Contale a las personas qué es lo que querés cambiar?',
  'Las peticiones con foto consiguen hasta 6 veces más firmas',
  'Explicá el problema y porque es importante. Contá cómo te impacta a vos, a tu familia y a la comunidad, esto hace que más personas apoyen la causa.',
  'Completá tus datos en caso de que tengamos que contactar para revisar la petición.',
  'Antes de finalizar, chequea que todo este correcto, y si necesitas cambiar algo, podes volver a editar tu petición',
];

const MultistepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);

  const [snapshot, setSnapshot] = useState(initialValues);

  const step = children[stepNumber];
  const stepElement = typeof step === 'function' ? step() : step;

  const totalSteps = children.length;
  const IsLastStep = stepNumber === totalSteps - 1; // aca presentaremos el boton con la funcionalidad del onSubmit. por ej: si tenemos 3 pasos, el ultimo paso estara en el index 2

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };
  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (values, FormikHelpers) => {
    if (stepElement.props.onSubmit) {
      await stepElement.props.onSubmit(values);
    }
    if (IsLastStep) {
      return onSubmit(values, FormikHelpers);
    } else {
      console.log(values, FormikHelpers);
      FormikHelpers.setTouched({});
      next(values);
    }
  };

  return (
    <div>
      <Stepper activeStep={stepNumber}>
        {children.map((currentStep) => {
          const stepElement =
            typeof currentStep === 'function' ? currentStep() : currentStep;
          const label = stepElement.props.stepName;

          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <h1>
          <strong>{FormTitles[stepNumber]}</strong>
        </h1>
        <br />
        <h4>{FormSubtitles[stepNumber]}</h4>
      </div>

      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={stepElement.props.validationSchema}
      >
        {(formik) => (
          <Form>
            {typeof step === 'function' ? step({ formik }) : step}
            <FormNavigation
              IsLastStep={IsLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previous(formik.values)}
            />
          </Form>
        )}
      </Formik>
      <div></div>
    </div>
  );
};

export default MultistepForm;

export const FormStep = ({ stepName = '', children }) => children; //este componente se comporta como un pseudo-componente que nos permite proveer diferentes props de cada step del form
