function isValidSkills(selector1, selector2, data) { 
    if (typeof selector1 !== 'string' ||
        selector1 === '') {
        console.log('ERROR: first selector is not valid');
        return false;
    }
    if (typeof selector2 !== 'string' ||
        selector2 === '') {
        console.log('ERROR: second selector is not valid');
        return false;
    }
    
    if (!Array.isArray(data) || data.length === 0) {
        console.log('ERROR: invalid data values');
        return false;
    }

    if (typeof data.maxCount == 'number') {
        if (!isFinite(data.maxCount) ||
            data.maxCount < 1 ||
            data.maxCount % 1 !== 0) {
            console.log('ERROR: invalid maxCount');
            return false;
        }
    }
    return true;
}

export { isValidSkills }