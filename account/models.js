import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');


module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        gender     : Sequelize.STRING,
        firstname  : Sequelize.STRING,
        lastname   : Sequelize.STRING,
        username   : Sequelize.STRING,
        email      : Sequelize.STRING,
        password   : Sequelize.STRING,
        last_login : Sequelize.DATE,
        date_joined: Sequelize.DATE,
        user_type  :{
            type: DataTypes.INTEGER,
            validate: { min: 0, max: 2 }
          },
        is_active  : Sequelize.BOOLEAN,    
        is_read_cgu: Sequelize.BOOLEAN,    
        avatar     : Sequelize.STRING,
        background : Sequelize.STRING,
        color      : Sequelize.STRING,
    });
    return User;
}

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('Teacher', {
        is_notif_teacher_exo : Sequelize.BOOLEAN,    
        is_notif_new_exo     : Sequelize.BOOLEAN,    
        is_helping_right     : Sequelize.BOOLEAN,    
        is_migration_gar     : Sequelize.BOOLEAN,    
        role                 : Sequelize.STRING,
    });
    return User;
}

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('Student', {
        is_notif_task : Sequelize.BOOLEAN,    
        is_ebep       : Sequelize.BOOLEAN,    
    });
    return Student;
}

module.exports = (sequelize, Sequelize) => {
    const Parent = sequelize.define('Parent', {
        is_notif_task : Sequelize.BOOLEAN,       
    });
    return Parent;
}


module.exports = (sequelize, Sequelize) => {
    const Parent = sequelize.define('Response', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        response : Sequelize.STRING,
        message  : Sequelize.STRING,
        is_read  : Sequelize.BOOLEAN,        
    });
    return Parent;
}




User.hasOne(Teacher, {
    foreignKey: 'userId'
  }); // On rajoute la colonne UserId dans la table Teacher.
  Teacher.belongsTo(User);

User.hasOne(Student, {
    foreignKey: 'userId'
  }); // On rajoute la colonne UserId dans la table Student.
Student.belongsTo(User);


Student.BelongsToMany (Level, {through: 'student_levels'}); // On rajoute une nouvelle table student_levels.
Level.BelongsToMany (Student, {through: 'student_levels'}); // On rajoute une nouvelle table student_levels. 


User.hasOne(Parent, {
    foreignKey: 'userId'
  }); // On rajoute la colonne UserId dans la table Parent.
Parent.belongsTo(User);

Parent.BelongsToMany (Student, {through: 'parent_students'}); // On rajoute une nouvelle table student_levels. Student.BelongsToMany (Level, {through: 'student_levels'}); // On rajoute une nouvelle table student_levels.
Student.BelongsToMany (Parent, {through: 'parent_students'}); // On rajoute une nouvelle table student_levels. 