

describe("Pruebas de endpoints para usuarios", ()=>{
  const username = "pepito";
  beforeAll(()=>{})

  describe("pruebas de getUsers", ()=>{
    beforeEach(()=>{});
    it("al llamar a getuser, me retorna la lista de usuarios", ()=>{});

    it("si no envia la informacion correcta, se obtiene un 404", ()=>{});
  });

  describe("pruebas de createUser", ()=>{
    const mockUser = {
      name:"",
      lastname:"",
      age:0,
      city:""
    };
    beforeEach(()=>{});
    it("al llamar a createUser, se crea el usuario exitosamente", ()=>{});

    it("al llamar a createUser con cierto permiso, se crea el usuario y se obtiene su id", ()=>{});

    it("si no envia la informacion correcta, se obtiene un 404", ()=>{});
  });
});



