import { useEffect, useRef } from "react";

export default function Badge() {
  const movingBorderRef = useRef<HTMLDivElement>(null); // Referensi ke elemen yang border-nya akan dianimasi
  useEffect(() => {
    const element = movingBorderRef.current;
    const borderColors = ["#d65d26", "white", "#d65d26", "white"]; // Warna yang akan digunakan
    let index = 0;
    let progress = 0;
    const speed = 0.005; // Kecepatan gerakan (0.01 adalah langkah yang cukup halus)
    let animationFrameId: number;

    function animateBorder() {
      progress += speed;
      if (progress >= 1) {
        progress = 0;
        index = (index + 1) % 4;
      }

      // Hitung posisi border saat ini berdasarkan progress
      const color1 = borderColors[index];
      const color2 = borderColors[(index + 1) % 4];
      const colorBlend = `linear-gradient(to right, ${color1} ${
        progress * 100
      }%, ${color2} ${progress * 100}%)`;

      if (element) {
        element.style.borderImage = colorBlend;
        element.style.borderImageSlice = "2";
      }

      animationFrameId = requestAnimationFrame(animateBorder);
    }

    // Mulai animasi
    animationFrameId = requestAnimationFrame(animateBorder);

    // Cleanup saat komponen di-unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Kosong, artinya efek hanya dijalankan sekali setelah mount

  return (
    <div
      className="absolute bottom-1/2 right-20 z-10 py-3 px-6 flex items-center gap-3 rounded"
      ref={movingBorderRef}
      style={{
        background: "rgba(255, 255, 255, 0.19)",
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
        backdropFilter: `blur(5)`,
        border: `1px solid rgba(255, 255, 255, 0.3)`,
      }}
    >
      <img src="/images/alope-logo.png" alt="alope-logo" className="w-9" />
      <p className="font-bold">CEO of ALOPE</p>
    </div>
  );
}
