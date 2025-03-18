
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, UserCheck, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const benefits = [{
    icon: <Calendar className="h-5 w-5" />,
    text: "Investigaciones en -24hrs"
  }, {
    icon: <Clock className="h-5 w-5" />,
    text: "Soporte 24/7"
  }, {
    icon: <UserCheck className="h-5 w-5" />,
    text: "Asistencia legal"
  }, {
    icon: <BadgeCheck className="h-5 w-5" />,
    text: "Renta sin aval"
  }];
  return;
};

export default CallToAction;
