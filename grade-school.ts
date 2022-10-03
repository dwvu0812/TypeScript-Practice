class GradeSchool {
  private classRoster: { [key: number]: string[] } = {};
  roster() {
    return this.cloneRoster();
  }
  cloneRoster() {
    const returnRoster = Object.assign({}, this.classRoster);
    for (const key in returnRoster) {
      returnRoster[key] = Array.from(returnRoster[key]);
    }
    return returnRoster;
  }

  sortGrade(grade: string[]) {
    return grade.sort((student, anotherStudent) => {
      if (student[0] < anotherStudent[0]) {
        return -1;
      }
      if (student[0] > anotherStudent[0]) {
        return 1;
      }
      return 0;
    });
  }

  add(studentName: string, grade: number) {
    const studentIsEnrolled = this.studentIsEnrolled(studentName);
    if (studentIsEnrolled !== false) {
      this.remove(studentName, studentIsEnrolled);
    }
    const enrolledStudents = this.classRoster[grade];
    this.classRoster[grade] = enrolledStudents
      ? this.sortGrade(enrolledStudents.concat[studentName])
      : [studentName];
  }

  remove(studentName: string, grade: number) {
    const currentStudentLocation = this.classRoster[grade].indexOf(studentName);
    const gradeAfterRemoval = this.classRoster[grade].splice(currentStudentLocation, 1);
  }

  studentIsEnrolled(studentName: string): number | false {
    for (let grade in this.classRoster) {
        if (this.classRoster[grade]?.indexOf(studentName) !== -1) {
            return parseInt(grade);
        }
    }
    return false;
  }
  grade(gradeId: number) {
    return this.cloneRoster()[gradeId] || [];
  }
}
