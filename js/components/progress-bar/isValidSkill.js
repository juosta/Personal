function isValidSkill(skill){  
        if (skill.name === undefined) {
            console.warn('ERROR: name value is missing');
            return false;
        } else if (typeof skill.name !== 'string' ||
            skill.name === '') {
            console.warn('ERROR: name field cannot be empty');
            return false;
        }
        if (skill.percent === undefined) {
            console.warn('ERROR: missing percent value');
            return false;
        } else if (typeof skill.percent !== 'string' ||
            skill.percent === '') {
            console.warn('ERROR: percent field cannot be empty');
            return false;
        }
        
        if(skill.percent[skill.percent.length - 1] !== "%" ||
        `${parseInt(skill.percent)}`.length !== (skill.percent.length - 1 )){
            console.warn('ERROR: percent value must end with %');
            return false;
        }
        
    return true;
}

export { isValidSkill }