
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es Mica?",
      answer: "Mica es una empresa que ofrece servicios de protección para inquilinos en México. Nuestros servicios están diseñados para brindarte tranquilidad y seguridad durante tu proceso de renta."
    },
    {
      question: "¿Cómo funciona la protección de depósito?",
      answer: "Nuestra protección de depósito te garantiza que, al finalizar tu contrato, recuperarás tu depósito completo. Si el arrendador retiene injustamente tu depósito, Mica te lo reembolsa mientras nosotros gestionamos la resolución del conflicto con el arrendador."
    },
    {
      question: "¿Qué incluye el soporte legal?",
      answer: "El soporte legal de Mica incluye asesoría jurídica especializada en temas de arrendamiento, revisión de contratos para garantizar condiciones justas, y representación legal en caso de disputas con el arrendador."
    },
    {
      question: "¿En qué consiste la inspección de propiedad?",
      answer: "Nuestro servicio de inspección de propiedad incluye una evaluación profesional del inmueble antes de que firmes el contrato, documentando el estado actual para prevenir disputas futuras sobre daños preexistentes."
    },
    {
      question: "¿Cómo puedo contratar los servicios de Mica?",
      answer: "Puedes contratar nuestros servicios directamente desde nuestra plataforma. Simplemente ingresa el monto de tu renta, selecciona el plan que mejor se adapte a tus necesidades y completa el proceso de registro y pago."
    },
    {
      question: "¿Los servicios de Mica están disponibles en toda la República Mexicana?",
      answer: "Sí, nuestros servicios están disponibles en toda la República Mexicana. Trabajamos con inquilinos de todas las entidades federativas."
    },
    {
      question: "¿Puedo cancelar mis servicios en cualquier momento?",
      answer: "Los planes de Mica se contratan por la duración de tu contrato de arrendamiento. Sin embargo, ofrecemos opciones flexibles si necesitas cancelar por circunstancias especiales. Contacta a nuestro equipo de soporte para discutir tu situación particular."
    },
    {
      question: "¿Qué documentos necesito para registrarme?",
      answer: "Para registrarte en Mica, necesitarás tu identificación oficial, una copia de tu contrato de arrendamiento (o los detalles del inmueble si aún no lo has firmado), y un método de pago válido."
    },
    {
      question: "¿Cuánto tiempo toma procesar un reclamo de depósito?",
      answer: "Una vez que presentas un reclamo válido por retención injusta de depósito, Mica procesa tu reembolso en un plazo máximo de 5 días hábiles, mientras nosotros iniciamos el proceso de resolución con el arrendador."
    },
    {
      question: "¿Ofrecen descuentos para renovaciones de contrato?",
      answer: "Sí, ofrecemos descuentos especiales para inquilinos que renuevan su protección Mica al extender o renovar su contrato de arrendamiento. Contáctanos antes de la renovación para conocer las ofertas disponibles."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h1>
              <p className="text-mica-gray-2">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mica-gray-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-mica-gray-2">
                ¿No encontraste la respuesta que buscabas? <a href="mailto:hola@mica.rent" className="text-mica-green hover:underline">Contáctanos</a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
