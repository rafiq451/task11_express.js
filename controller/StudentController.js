// export data student
// const data = require('../data/Student');
const Student = require('../data/Student');

class StudentController {
  index(req, res) {
    const data = {
      message: 'menampilkan seluruh data ',
      data: Student,
    };
    res.json(data);
  }

  store(req, res) {
    const { nama } = req.body;
    const student = Student.push(nama);
    const data = {
      message: `Menambah data Student ${nama}`,
      jumlah: student,
      data: Student,
    };
    res.json(data);
  }
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    // const student = Student.push(nama);
    const data = {
      message: `Mengupdate data Student ${id}  ${nama}`,
      ubah: (Student[id] = nama),
      data: Student,
    };
    res.json(data);
  }
  destroy(req, res) {
    const { id } = req.params;
    const student = Student.pop();
    const data = {
      message: `Menghapus data ke ${id} `,
      hapus: student,
      data: Student,
    };
    res.json(data);
  }
}

const object = new StudentController();

module.exports = object;
