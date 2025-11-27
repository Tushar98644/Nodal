'use client'

import { brandSchema } from "@/lib/schema";
import { ChatComponent, Header, InfoForm, Preview } from "@/components";
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
    <main className="h-screen flex flex-col overflow-hidden bg-[#FFFBF8]">
      <Header />

      <div className="flex-1 overflow-hidden relative">
        {!hasSubmitted && (
          <InfoForm onComplete={handleFormComplete} />
        )}

        {hasSubmitted && !object && (
          <LoadingScreen />
        )}

        {hasSubmitted && object && (
          <div className="grid grid-cols-5 h-full animate-fade-in">
            <div id="chat" className="col-span-2 border-r border-slate-200 bg-white/50 backdrop-blur-sm">
              <ChatComponent onSubmit={handleChatSubmit} object={object} isLoading={isLoading} />
            </div>
            <div id="preview" className="col-span-3 bg-slate-50/50">
              <Preview object={object} />
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

export default DashBoardPage;