import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";

interface ProjectGalleryProps {
  photos: string[];
  projectTitle: string;
}

const ProjectGallery = ({ photos, projectTitle }: ProjectGalleryProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="flex-1">
          Gallery
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">{projectTitle} Gallery</h3>
            
            <Carousel className="w-full">
              <CarouselContent>
                {photos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center">
                      <img
                        src={photo}
                        alt={`${projectTitle} screenshot ${index + 1}`}
                        className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            <div className="flex justify-center mt-4 space-x-2">
              {photos.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;