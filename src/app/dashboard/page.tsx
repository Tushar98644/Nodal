'use client'

import { brandSchema } from "@/lib/schema";
import { ChatComponent, InfoForm, Preview } from "@/components";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { useState } from "react";
import { LoadingScreen } from "@/features";

const DashBoardPage = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [contextData, setContextData] = useState<any>(null);

  const { object, submit, isLoading } = useObject({
    api: '/api/generate',
    schema: brandSchema,
  });

  const handleFormComplete = (formData: any) => {
    setContextData(formData);
    setHasSubmitted(true);

    submit({
      prompt: `Create a brand for a recruitment agency.
               Name: ${formData.name}
               Industry: ${formData.industry}
               Vibe: ${formData.vibe}
               Inspiration: ${formData.inspiration}`
    });
  };

  const handleChatSubmit = (userMessage: string) => {
    submit({
      prompt: `CONTEXT: Brand "${contextData?.name}". 
               REQUEST: "${userMessage}". 
               Regenerate JSON.`
    });
  };

  return (
    <div className="h-full w-full relative">

      {!hasSubmitted && (
        <div className="h-full w-full flex items-center justify-center">
          <InfoForm onComplete={handleFormComplete} />
        </div>
      )}

      {hasSubmitted && !object && (
        <LoadingScreen />
      )}

      {hasSubmitted && object && (
        <div className="grid grid-cols-1 lg:grid-cols-5 h-full w-full animate-fade-in">

          <div id="chat" className="h-[40%] lg:h-full lg:col-span-2 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white/50 backdrop-blur-sm relative flex flex-col">
            <ChatComponent onSubmit={handleChatSubmit} object={object} isLoading={isLoading} />
          </div>

          <div id="preview" className="h-[60%] lg:h-full lg:col-span-3 bg-slate-50/50 relative overflow-hidden">
            <Preview
              object={{
                companyName: object.companyName ?? "",
                tagline: object.tagline ?? "",
                websiteHtml: object.websiteHtml ?? "",
                logoSvg: object.logoSvg ?? "",
                readme: object.readme ?? "",
                colors: {
                  primary: object.colors?.primary ?? "#000000",
                  accent: object.colors?.accent ?? "#000000",
                  background: object.colors?.background ?? "#ffffff",
                }
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default DashBoardPage;