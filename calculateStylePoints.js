const calculateStylePoints = (Note1, Note2, Note3, Note4, Note5) => {

    var min = Math.min(Note1, Note2, Note3, Note4, Note5);
    var max = Math.max(Note1, Note2, Note3, Note4, Note5);

    return (Note1 + Note2 + Note3 + Note4 + Note5) - min - max;
};

module.exports = calculateStylePoints;