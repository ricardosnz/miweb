import { Skill } from '../types';

const createSkillCard = (skillName: string) => ` 
  <div class="skills__data">
    <div>
      <h3 class="skills__name">${skillName}</h3>
    </div>
  </div>`;

export function createSkillCategoryCard(skill: Skill) {
  const { category, skills } = skill;
  const html = `
    <h3 class="skills__title">${category}</h3>
    <div class="skills__box">
      ${skills.map(createSkillCard).join('')}
    </div>`;
  return { className: 'skills__category', html };
}
