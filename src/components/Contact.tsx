
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name')?.toString() || '',
      contact: formData.get('contact')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      scope: formData.get('scope')?.toString() || '',
      comments: formData.get('comments')?.toString() || '',
      created_at: new Date().toISOString(),
    };

    try {
      // Store in Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert(data);

      if (error) throw error;

      // Send email notification using Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'kuldar.kutti@gmail.com',
          subject: `New Contact Form Submission: ${data.service}`,
          ...data
        }
      });

      if (emailError) throw emailError;

      toast({
        title: "Päring saadetud!",
        description: "Võtame teiega peagi ühendust.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Viga!",
        description: "Midagi läks valesti. Palun proovige hiljem uuesti.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Küsi hinnapakkumist
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nimi</label>
                <Input required name="name" placeholder="Teie nimi" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefon/E-mail
                </label>
                <Input
                  required
                  name="contact"
                  placeholder="Teie kontaktandmed"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Teenuse tüüp
              </label>
              <Select name="service" required>
                <SelectTrigger>
                  <SelectValue placeholder="Valige teenus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">Puhastusteenus</SelectItem>
                  <SelectItem value="pavement">Tänavakivide paigaldus</SelectItem>
                  <SelectItem value="landscaping">Haljastustöö</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Töö maht ja asukoht
              </label>
              <Input
                required
                name="scope"
                placeholder="Kirjeldage töö mahtu ja asukohta"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Lisakommentaarid
              </label>
              <Textarea
                name="comments"
                placeholder="Lisage täiendav info"
                className="min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saadan..." : "Saada päring"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
