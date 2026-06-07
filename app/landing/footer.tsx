"use client";

import Image from "next/image";
import Link from "next/link";
import { SiTiktok, SiInstagram, SiFacebook } from "react-icons/si"
import { motion } from "framer-motion";
import {
  MessageCircleMore,
} from "lucide-react";

export default function FooterPremium() {
  return (
    <footer id="contacto" className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/img/logo.png"
            alt="TCP"
            width={320}
            height={90}
            priority
            className="h-auto w-[260px] md:w-[420px]"
          />

          <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-400">
            Impulsamos la transformación organizacional mediante
            estrategias integrales de Seguridad, Salud Ocupacional,
            Medio Ambiente y Responsabilidad Social.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-xl">
            {/* Facebook */}
             <Link
                href=""
                target="_blank"
              >
                <SiTiktok
                  size={30}
                  className="cursor-pointer text-purple-200 transition-all duration-300 hover:scale-125 hover:text-purple-600"
                />
              </Link>

            {/* Divider */}
            <div className="mx-6 h-6 w-px bg-white/15" />

            <Link
                href="https://www.instagram.com/huellayaroma/"
                target="_blank"
              >
                <SiInstagram
                  size={30}
                  className="cursor-pointer text-pink-200 transition-all duration-300 hover:scale-125 hover:text-pink-600"
                />
              </Link>

            {/* Divider */}
            <div className="mx-6 h-6 w-px bg-white/15" />

            {/* WhatsApp */}
            <Link
                href="https://www.facebook.com/Huella-y-Aroma-100091759881419/"
                target="_blank"
              >
                <SiFacebook
                  size={30}
                  className="cursor-pointer text-blue-200 transition-all duration-300 hover:scale-125 hover:text-blue-600"
                />
              </Link>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-center text-sm tracking-wide text-slate-500">
            © {new Date().getFullYear()} TCP Consultoría Estratégica.
            Todos los derechos reservados.
          </p>

          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-600">
            Seguridad · Salud · Medio Ambiente · Responsabilidad Social
          </p>
        </div>
      </div>
    </footer>
  );
}