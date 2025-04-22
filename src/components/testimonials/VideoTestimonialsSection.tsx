
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { videoTestimonials } from "@/utils/testimonial-videos";

const VideoTestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;
  
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videoTestimonials.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videoTestimonials.length / videosPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-20 px-4 bg-jet">
      <div className="container mx-auto">
        <SectionHeading
          title="Video Success Stories"
          subtitle="Watch how BWC has transformed the trading careers of our members."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {currentVideos.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="group relative rounded-lg overflow-hidden">
                <div className="aspect-video bg-charcoal/50 relative">
                  <iframe 
                    src={`https://player.vimeo.com/video/${testimonial.vimeoId}?title=0&byline=0&portrait=0`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-4 bg-charcoal/50 border border-gold/10">
                  <h3 className="text-xl font-bold text-white mb-2">{testimonial.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{testimonial.description}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    onClick={() => handlePageChange(pageNum)}
                    isActive={currentPage === pageNum}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
