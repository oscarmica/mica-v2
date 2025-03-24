
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

// Función para obtener posts de WordPress
const fetchWordPressPosts = async () => {
  // Reemplaza esta URL con la de tu sitio WordPress
  const response = await fetch('https://tu-sitio-wordpress.com/wp-json/wp/v2/posts?_embed');
  if (!response.ok) {
    throw new Error('Error al cargar los posts');
  }
  return response.json();
};

// Tipos para los posts de WordPress
interface WordPressPost {
  id: number;
  date: string;
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
  categories: number[];
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { toast } = useToast();
  
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['wordpressPosts'],
    queryFn: fetchWordPressPosts,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "No se pudieron cargar los artículos del blog",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  // Función para limpiar HTML de WordPress
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <span className="font-medium">Blog</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center mb-12">
              <span className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
                <span className="mr-2 text-lg">📝</span>
                <span className="font-medium text-sm">Conocimiento y recursos</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog de mica.rent</h1>
              <p className="text-mica-gray-2 text-lg max-w-2xl mx-auto">
                Artículos, guías y recursos para navegar el mundo del arrendamiento de manera informada y segura.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 p-1 bg-slate-100 rounded-lg">
                <Button 
                  variant={activeCategory === 'all' ? "default" : "ghost"} 
                  className="rounded-md" 
                  onClick={() => setActiveCategory('all')}
                >
                  Todos
                </Button>
                <Button 
                  variant={activeCategory === 'consejos' ? "default" : "ghost"} 
                  className="rounded-md" 
                  onClick={() => setActiveCategory('consejos')}
                >
                  Consejos
                </Button>
                <Button 
                  variant={activeCategory === 'legal' ? "default" : "ghost"} 
                  className="rounded-md"
                  onClick={() => setActiveCategory('legal')}
                >
                  Legal
                </Button>
                <Button 
                  variant={activeCategory === 'finanzas' ? "default" : "ghost"} 
                  className="rounded-md"
                  onClick={() => setActiveCategory('finanzas')}
                >
                  Finanzas
                </Button>
              </div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <Card key={index} className="h-full flex flex-col overflow-hidden">
                    <div className="aspect-video bg-slate-200">
                      <Skeleton className="h-full w-full" />
                    </div>
                    <CardContent className="pt-6 flex-grow flex flex-col">
                      <Skeleton className="h-4 w-20 mb-2" />
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6 mb-4" />
                      <Skeleton className="h-4 w-16 mt-auto" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts && posts.map((post: WordPressPost) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-all">
                      <div className="aspect-video relative bg-slate-100">
                        <img 
                          src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'} 
                          alt={post.title.rendered} 
                          className="object-cover w-full h-full" 
                        />
                        <span className="absolute top-3 left-3 bg-white text-xs font-medium px-2 py-1 rounded-full">
                          Consejos
                        </span>
                      </div>
                      <CardContent className="pt-6 flex-grow flex flex-col">
                        <div className="text-xs text-mica-gray-2 mb-2">{formatDate(post.date)}</div>
                        <h3 className="font-semibold text-lg mb-2">{post.title.rendered}</h3>
                        <p className="text-mica-gray-2 text-sm mb-4 flex-grow">
                          {stripHtml(post.excerpt.rendered)}
                        </p>
                        <Button 
                          variant="ghost" 
                          className="text-mica-green justify-start p-0 hover:bg-transparent hover:underline"
                          onClick={() => window.open(post.link, '_blank')}
                        >
                          Leer más
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="text-center">
              <Button variant="outline" className="border-mica-green text-mica-green hover:bg-mica-green/5">
                Cargar más artículos
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
