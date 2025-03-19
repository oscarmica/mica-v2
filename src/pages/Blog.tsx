import React from 'react';
import { motion } from 'framer-motion';
import NavHeader from '@/components/ui/nav-header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Cómo proteger tu depósito de garantía",
      excerpt: "Descubre los pasos clave para asegurar la devolución de tu depósito al finalizar tu contrato de arrendamiento.",
      date: "15 Julio, 2023",
      category: "Consejos",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Derechos del inquilino en México: Lo que debes saber",
      excerpt: "Una guía completa sobre los derechos que te protegen como inquilino en territorio mexicano.",
      date: "28 Junio, 2023",
      category: "Legal",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "5 señales de alerta antes de firmar un contrato de arrendamiento",
      excerpt: "Identifica estas señales para evitar problemas futuros con tu arrendador o la propiedad.",
      date: "10 Junio, 2023",
      category: "Consejos",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <>
      <NavHeader />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                <Button variant="ghost" className="rounded-md bg-white shadow-sm">Todos</Button>
                <Button variant="ghost" className="rounded-md">Consejos</Button>
                <Button variant="ghost" className="rounded-md">Legal</Button>
                <Button variant="ghost" className="rounded-md">Finanzas</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-video relative bg-slate-100">
                      <img src={post.imageUrl} alt={post.title} className="object-cover w-full h-full" />
                      <span className="absolute top-3 left-3 bg-white text-xs font-medium px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardContent className="pt-6 flex-grow flex flex-col">
                      <div className="text-xs text-mica-gray-2 mb-2">{post.date}</div>
                      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                      <p className="text-mica-gray-2 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <Button variant="ghost" className="text-mica-green justify-start p-0 hover:bg-transparent hover:underline">
                        Leer más
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

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
