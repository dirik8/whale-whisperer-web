
export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  preview: string;
  vimeoId: string;
  category: "crypto" | "stocks" | "forex" | "options" | "day" | "swing";
  duration: string;
  title: string;
  description: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Former CPA, Crypto Trader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    preview: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
    vimeoId: "944601703",
    category: "crypto",
    duration: "4:15",
    title: "From CPA to Crypto Kingmaker",
    description: "Learn how I transitioned from accounting to full-time crypto trading, achieving consistent 6-figure monthly returns using BWC strategies."
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Options Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    preview: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    vimeoId: "944601691",
    category: "options",
    duration: "3:45",
    title: "Options Trading Mastery Journey",
    description: "My journey from losing trades to consistent profits using BWC's proprietary options strategy framework."
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Day Trading Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    preview: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    vimeoId: "944601656",
    category: "day",
    duration: "5:20",
    title: "Day Trading Success Blueprint",
    description: "How I developed a winning day trading strategy that generates consistent profits in any market condition."
  },
  // ... Add the rest of the video testimonials here following the same pattern
];
