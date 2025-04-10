import { defineNuxtPlugin, useHead } from "#app";

interface SchemaData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

export default defineNuxtPlugin((nuxtApp) => {
  /**
   * Injects schema.org structured data into the page head as JSON-LD
   * @param schemas - Array of schema.org structured data objects
   */
  const injectSchema = (schemas: SchemaData | SchemaData[]) => {
    const schemaArray = Array.isArray(schemas) ? schemas : [schemas];

    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schemaArray),
          key: "structured-data",
        },
      ],
    });
  };

  return {
    provide: {
      injectSchema,
    },
  };
});
