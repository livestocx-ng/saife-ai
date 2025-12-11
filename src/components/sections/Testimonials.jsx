import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amaka Lydia',
      age: '22 Years',
      quote: "When I first heard of Saife AI, I thought it was just another app. But the day it blocked a really violent video on my feed, I knew it was different. It actually protects me from things that trigger my anxiety.",
      handle: '@lydiauzo',
      platform: 'TikTok',
      gradient: 'from-pink-500 to-rose-500',
      image: '/media/testimonial_amaka.jpg'
    },
    {
      name: 'Mwanret Gar',
      age: '21 Years',
      quote: "I love that Saife AI is Nigerian-made. It understands the type of content we face online here. From ritual videos to fake news to harassment. It filters them automatically for me ❤️❤️",
      handle: '@mwanret_gar',
      platform: 'Instagram',
      gradient: 'from-purple-500 to-indigo-500',
      image: '/media/testimonial_mwanret.jpg'
    },
    {
      name: 'Limona Esther',
      age: '14 Years',
      quote: "I didn’t know I needed Saife AI until I tried it. It removed over 40 toxic and violent videos from my feed in just one week. I didn’t even realize how much it was affecting my mood before",
      gradient: 'from-blue-400 to-cyan-400',
      image: '/media/testimonial_esther.jpg'
    },
    {
      name: 'Anna Uduaghan',
      age: '27 Years',
      quote: "I was scared for my younger sister because she’s always scrolling reels. Saife AI now blocks dangerous challenges and harmful trends from her feed. The app is doing God’s work",
      gradient: 'from-teal-400 to-emerald-400',
      image: '/media/testimonial_anna.jpg'
    },
    {
      name: 'Eleazer Eneriene',
      age: '21 Years',
      quote: "Before Saife AI, I didn’t even know how to avoid some of the nonsense people send online. The app now blocks most of the violent and sexual content before I even see it. Honestly, it has given me small peace of mind ❤️🫂.",
      handle: '@gideon_elle',
      platform: 'TikTok',
      gradient: 'from-orange-400 to-amber-400',
      image: '/media/testimonial_eleazer.JPG'
    },
    {
      name: 'Favour Obi',
      age: '13 Years',
      quote: "As a student, I spend plenty time on TikTok and Instagram. Saife AI helps me filter out the disturbing videos. I feel safer and more in control. My mental health improved because I’m not seeing rubbish every day 🥹.",
      handle: '@big__emily',
      platform: 'TikTok',
      gradient: 'from-red-400 to-pink-400',
      image: '/media/testimonial_favour.jpg'
    },
    {
      name: 'Tomilola Idris',
      age: '19 Years',
      quote: "I used to get creepy DMs from strangers. Saife AI now warns me about dangerous profiles and stops their messages. It’s like having a smart big sister looking out for me online.",
      handle: '@_elsiequin',
      platform: 'TikTok',
      gradient: 'from-violet-500 to-purple-500',
      image: '/media/testimonial_tomilola.JPG'
    },
    {
      name: 'Pam Simi',
      age: '28 Years',
      quote: "Me I love how Saife AI skips harmful content automatically when I’m scrolling. Especially those violent videos that just pop up anyhow. Now my younger sister and I can use my phone without fear.",
      gradient: 'from-green-500 to-emerald-500',
      image: '/media/testimonial_simi.jpg'
    },
    {
      name: 'Sadatu Aminu',
      age: '11 Years',
      quote: "My mum downloaded Saife AI for me because of the things going around WhatsApp and Facebook. I didn’t like the idea at first, but now I actually feel safer. It filters dangerous messages before I see them. 😘",
      gradient: 'from-blue-500 to-indigo-600',
      image: '/media/testimonial_sadatu.jpg'
    },
    {
      name: 'Florence Idah',
      age: '23 Years',
      quote: "One of my worst experiences online was seeing shocking videos I didn’t click. Saife AI now filters those things out. It makes me feel more confident going online without anxiety.",
      handle: '@princess_alethia',
      platform: 'TikTok',
      gradient: 'from-rose-400 to-orange-400',
      image: '/media/testimonial_florence.JPG'
    },
    {
      name: 'Patience Monday',
      age: '26 Years',
      quote: "Saife AI helps me protect my space. At first I thought the app would be complicated, but it’s actually very easy. I feel like someone finally built something for girls like us. Social media is stressful enough.",
      handle: '@ashp221',
      platform: 'TikTok',
      gradient: 'from-cyan-500 to-blue-500',
      image: '/media/testimonial_patience.jpg'
    },
    {
      name: 'Ritkatmun Lenka',
      age: '20 Years',
      quote: "I follow a lot of pages for school and entertainment, but some of them post disturbing stuff without warning. With Saife AI, I finally have control over what enters my mind. Every girl needs this app.",
      handle: '@ritkatmun',
      platform: 'Instagram',
      gradient: 'from-fuchsia-500 to-pink-500',
      image: '/media/testimonial_rit.JPG'
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom mb-12">
        <SectionHeader
          headline="I Finally Feel Safe Online"
          subheadline="Real stories from women and girls using Saife AI every day."
        />
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for smooth fade feeling at edges (optional but nice) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white z-10 hidden md:block"></div>

        <div className="flex">
          <motion.div
            className="flex gap-6 py-4"
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 50 
            }}
            initial={{ x: 0 }}
            style={{ width: "fit-content" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={index} 
                className="relative flex-shrink-0 w-[300px] md:w-[400px] hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Background Gradient Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5`} />

                {/* Quote Icon */}
                <div className={`absolute top-6 right-6 w-10 h-10 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full flex items-center justify-center z-10`}>
                  <Quote className="w-5 h-5 text-gray-700" />
                </div>

                {/* Content */}
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm overflow-hidden`}>
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                          {testimonial.name}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">
                          {testimonial.age}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {testimonial.handle && (
                     <div className="pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex text-xs text-gray-500">
                           <span className="font-medium mr-1">Handle:</span> {testimonial.handle} 
                           {testimonial.platform && ` • ${testimonial.platform}`}
                        </div>
                     </div>
                  )}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
