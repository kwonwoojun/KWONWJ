package common;
class Person {
    private String name;
    private int age;
    private String[] hobbies = new String[5];
    private String[] pets = new String[5];
    
    
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return this.age;
    }
    public void addHobby(String hobby) {
        for( int i = 0; i < hobbies.length; i++) {
            if (hobbies[i] == null) {
                hobbies[i] = hobby;
                break;
            }
        }
    }
        // reading sleeping cycling eating
    public String getHobbies() {
        String hobby = "";
        for (String hob : hobbies) {
            if (hob != null) {
                hobby += hob + " ";
            }
        }
        return hobby;
    }
    public void addPet(String pet) {
        for( int i = 0; i < pets.length; i++) {
            if (pets[i] == null) {
                pets[i] = pet;
                break;
            }
        }
    }

    public String getPets() {
        String pet = "";
        for (String pett : pets) {
            if (pett != null) {
                pet += pett + " ";
            }
        }
        return pet;
    }
}
public class Morning1023 {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.setName("Hong");
        p1.setAge(20);
        p1.addHobby("reading");
        p1.addHobby("sleeping");
        p1.addPet("cat");
        p1.addPet("dog");
        
       

        System.out.println("Name: " + p1.getName() 
                            +",Age: " + p1.getAge() 
                            +",hobby: "+ p1.getHobbies()
                           + ",Pet: " + p1.getPets());
                        
        
    }
}

    
