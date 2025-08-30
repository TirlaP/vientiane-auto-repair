"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Logo } from "@/components/Logo";
import { Separator } from "@/components/ui/separator";
import { HeroCard } from "../Home2/HeroFeatures";
import Link from "next/link";

export const MotionLogo = motion(Logo);
export const MotionSeparator = motion(Separator);
export const MotionImage = motion(Image);
export const MotionHeroCard = motion(HeroCard);
export const MotionLink = motion(Link);
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionNav = motion.nav;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;
