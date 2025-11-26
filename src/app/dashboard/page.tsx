'use client'

import { Chat, Header, InfoForm, Preview } from "@/components";
import { useState } from "react";

const DashBoardPage = () => {
  const [build, setBuild] = useState(false);

  return (
    <main className="h-full">
      <Header />
      {build ?
        (
          <div className="grid grid-cols-5">
            <div id="chat" className="col-span-2 bg-amber-600">
              <Chat />
            </div>
            <div id="preview" className="col-span-3 bg-amber-100">
              <Preview />
            </div>
          </div>
        ) : (<>
          <InfoForm />
        </>
        )
      }
    </main>
  );
}

export default DashBoardPage;