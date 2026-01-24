import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pubProject from '../data/pub-projects.json';
import PubProjectItem from './PubProjectItem';

export default function PubProjects() {
  const pubProjectList = pubProject.map((project) => {
    return (
      <SwiperSlide key={project.id}>
        <PubProjectItem {...project} />
      </SwiperSlide>
    );
  });

  return (
    <section className="pub-projects">
      <div className="inner">
        <h2 className="librebaskerville">PUBLISHING PROJECTS</h2>
        <div className="move-item">
          <button className="swiper-button-prev" />
          <Swiper
            slidesPerView={2}
            spaceBetween={60}
            loop={true}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
            }}
            className="pub-project-swiper"
          >
            {pubProjectList}
          </Swiper>
          <button className="swiper-button-next" />
        </div>
      </div>
    </section>
  );
}
