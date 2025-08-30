import React from "react";

const Map = () => {
   return (
      <section className="h-[400px] w-full md:h-[500px] lg:h-[600px] xl:h-[720px]">
         <iframe
            className="h-full w-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.313765530434!2d90.3867355758999!3d23.878490083845758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5b5ce15ad37%3A0xa67f5f221da6908e!2sNamespace%20IT!5e0!3m2!1sen!2sbd!4v1716807940651!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
   );
};

export { Map };
