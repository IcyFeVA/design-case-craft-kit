import { GalleryImageDialog } from "@/pages/GalleryImageDialog";
import { useState } from "react";

type Screenshot = {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  year: string | number;
  tags: string[];
};

type ScreenshotsRowProps = {
    screenshots: Screenshot[];
};

const ScreenshotsRow = function({ screenshots }: ScreenshotsRowProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const selectedImage = openIndex !== null ? screenshots[openIndex] : null;
    const setSelectedImage = (idx: number | null) => setOpenIndex(idx);

    return (
        <>
            <div className="flex items-center mt-8" style={{ height: 48 }}>
                <span
                    className="mr-4 text-sm font-medium text-gray-600"
                    style={{ minWidth: 80 }}
                >
                    Process Shots
                </span>
                {screenshots.map((s, i) => ( 
                    <div
                        key={i}
                        style={{
                            width: 120,
                            aspectRatio: "16/9",
                            borderRadius: 8,
                            overflow: "hidden",
                            marginLeft: i === 0 ? 0 : 16,
                            zIndex: 10 + i,
                            background: `url(${s.imageUrl}) center/cover`,
                            cursor: "pointer",
                            // transition: "box-shadow 0.2s",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 500,
                            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                            border: "3px solid #fff",
                            boxSizing: "border-box",
                            // transform: Math.random() > 0.5 ? "rotate(3deg)" : "rotate(-3deg)",
                        }}
                        title={s.title}
                        onClick={() => setOpenIndex(i)}
                        className="shadow-2xl transform transition-transform duration-300 hover:scale-110"
                    >
                    </div>
                ))}
            </div>
            {/* Image Overlay Dialog */}
            <GalleryImageDialog
                open={!!selectedImage}
                onOpenChange={(open) => setSelectedImage(open ? openIndex : null)}
                item={selectedImage}
            />
        </>
    );
}

export default ScreenshotsRow;