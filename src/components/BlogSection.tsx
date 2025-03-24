
import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

// Función para obtener posts de WordPress
const fetchRecentPosts = async () => {
  // Reemplaza esta URL con la de tu sitio WordPress
  const response = await fetch('https://tu-sitio-wordpress.com/wp-json/wp/v2/posts?_embed&per_page=4');
  if (!response.ok) {
    throw new Error('Error al cargar los posts');
  }
  return response.json();
};

// Tipos para los posts de WordPress
interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

const BlogSection = () => {
  // Consulta los últimos posts
  const { data: posts, isLoading } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: fetchRecentPosts,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  // Función para limpiar HTML de WordPress
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Truncar texto para extractos
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="blog">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full py-20 lg:py-40 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto flex flex-col gap-14">
            <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-gray-800">
                Artículos recientes
              </h4>
              <Link to="/blog">
                <Button className="gap-4 bg-mica-green hover:bg-mica-green/90 text-white">
                  Ver todos los artículos <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {isLoading ? (
                // Esqueletos de carga
                Array(4).fill(0).map((_, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100">
                      <Skeleton className="w-full h-full" />
                    </div>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))
              ) : (
                // Renderiza los posts de WordPress
                posts && posts.map((post: WordPressPost) => (
                  <a 
                    key={post.id} 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all"
                  >
                    <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
                      <img 
                        src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'} 
                        alt={post.title.rendered} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">
                      {post.title.rendered}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {truncateText(stripHtml(post.excerpt.rendered), 100)}
                    </p>
                  </a>
                ))
              )}
              
              {/* Muestra posts estáticos si no hay datos de WordPress */}
              {!isLoading && (!posts || posts.length === 0) && (
                <>
                  <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
                    <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
                      <img 
                        src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Fwhat-is-guarantee%2Fcover.png&w=750&q=75" 
                        alt="¿Qué es un seguro de garantía de alquiler?" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">¿Qué es un seguro de garantía de alquiler?</h3>
                    <p className="text-gray-600 text-base">
                      Conoce cómo funciona un seguro de alquiler y cómo puede proteger tanto a propietarios como inquilinos.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
                    <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
                      <img 
                        src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Ffiador-o-garantia%2Fcover.png&w=750&q=75" 
                        alt="¿Fiador o garantía de alquiler?" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">¿Fiador o garantía de alquiler?</h3>
                    <p className="text-gray-600 text-base">
                      Comprende las diferencias entre un fiador tradicional y una garantía de alquiler moderna.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
                    <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
                      <img 
                        src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Fasesores-inmobiliarios%2Fcover.png&w=750&q=75" 
                        alt="Beneficios para asesores inmobiliarios" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">Beneficios para asesores inmobiliarios</h3>
                    <p className="text-gray-600 text-base">
                      Descubre cómo Mica ayuda a los asesores inmobiliarios a cerrar contratos más rápido y con mayor seguridad.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
                    <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
                      <img 
                        src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Fpropietarios%2Fcover.png&w=750&q=75" 
                        alt="Ventajas para propietarios" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">Ventajas para propietarios</h3>
                    <p className="text-gray-600 text-base">
                      Conoce por qué cada vez más propietarios eligen Mica para proteger sus rentas y propiedades.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
