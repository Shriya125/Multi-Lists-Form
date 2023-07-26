var subjectObject = {
    "SE": {
      "Odd": ['DSA', 'BCN', 'OOP', 'DM', 'LDCO', 'Soft Skills', 'DSA Lab', 'OOP Lab', 'LDCO Lab'],
      "Even": ['CG', 'PAI', 'M3', 'SE', 'DBMS', "PBL", 'CG Lab', 'PAI Lab', 'DBMS Lab']
    },
    "TE": {
      "Odd": ['HCI', 'OS', 'Elective-1', 'TOC', 'ML', 'HCI Lab', 'ML Lab', 'OS Lab'],
      "Even": ['Computer Network and Security', 'Data Science and Big Data Analysis', 'Web App Development', 'Elective-2', 'Internship', 'CNS Lab', 'DB & BDA Lab', 'Lab Practice-2']
    },
    "BE":{
      "Odd": ['Information and Storage Retrieval', 'Software Project Management', 'Deep Learning', 'Elective-3', 'Elective-4', 'Lab Practice-3', 'Lab Practice-4', 'Project Stage-1'],
      "Even": ['Distributed Systems', 'Elective-5', 'Elective-6', 'Startup and Entrepreneurship', 'Lab Practice-5', 'Lab Practice-6', 'Project Stage-2']
    }
}

window.onload = function(){
    var first = document.getElementById('first')
    var second = document.getElementById('second')
    var third = document.getElementById('third')

    for(var x in subjectObject) {
        console.log(x);
        first.options[first.options.length] = new Option(x)
    }

    first.onchange = function() {
        second.length = 1
        third.length = 1

        second.style.display = 'block'
        for(var y in subjectObject[this.value]){
            console.log(y);
            second.options[second.options.length] = new Option(y)
        }
    }

    second.onchange = function() {
      third.length = 1

      third.style.display = 'block'
      z= subjectObject[first.value][this.value]
      console.log(z);
      for(let i=0; i<z.length; i++){
        third.options[third.options.length] = new Option(z[i])
      }
    }
}