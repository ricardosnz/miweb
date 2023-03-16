import { Profile } from '../types';

const createSocialLinks = (socialLinks: Profile['socialLinks']) => {
  return `
    <ul class="profile__social">
        ${socialLinks
          .map(
            ({ name, link }) => `
        <a href="${link}" target="_blank" class="profile__social-link">
            <i class="ri-${name}-line"></i>
        </a>`
          )
          .join('')}
    </ul>`;
};

export function createProfileCard(container: HTMLElement, profile: Profile) {
  const { image, name, about, socialLinks, cvName } = profile;
  container.innerHTML = `
      <div class="profile__perfil">
        <img src="${image}" alt="${name}" />
      </div>
      <div class="profile__data">
        <h2 class="profile__name">${name}</h2>
        <h3 class="profile__about">
          <input type="checkbox" id="more-about" />
          <label for="more-about">${about}</label>
        </h3>      
        ${createSocialLinks(socialLinks)}
      </div>
      <a download="" href="assets/pdf/me_cv.pdf" class="profile__button-cv button">
        ${cvName}<i class="ri-download-line"></i>
      </a>`;
}
