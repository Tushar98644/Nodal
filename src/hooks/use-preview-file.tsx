import { useMemo } from 'react';
import { FileCode, FileJson, FileType, Image as ImageIcon } from 'lucide-react';
import { formatHtml } from '@/utils/format-html';
import { BrandSchema } from '@/lib/schema';

export const usePreviewFiles = (object: BrandSchema) => {
    return useMemo(() => {
        const brandData = {
            name: object?.companyName || "Generating...",
            tagline: object?.tagline || "Generating...",
            colors: object?.colors || {},
        };

        const rawHtml = object?.websiteHtml || "";
        const formattedHtml = rawHtml.length > 50 && !rawHtml.includes('\n')
            ? formatHtml(rawHtml)
            : rawHtml;

        const readmeContent = `
        # ${object?.companyName || 'Agency'}
        ## 🚀 How to Deploy
        1. Do not open index.html directly.
        2. Drag this folder to [Netlify Drop](https://app.netlify.com/drop).
        `.trim();

        return {
            'index.html': {
                lang: 'html',
                icon: <FileCode size={14} className="text-orange-400" />,
                content: formattedHtml
            },
            'logo.svg': {
                lang: 'xml',
                icon: <ImageIcon size={14} className="text-purple-400" />,
                content: object?.logoSvg || "<svg>...</svg>"
            },
            'brand.json': {
                lang: 'json',
                icon: <FileJson size={14} className="text-yellow-400" />,
                content: JSON.stringify(brandData, null, 2)
            },
            'README.md': {
                lang: 'text',
                icon: <FileType size={14} className="text-slate-400" />,
                content: readmeContent
            }
        };
    }, [object]);
};