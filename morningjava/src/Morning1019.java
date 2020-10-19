public class Morning1019 {

public void Student() {
	
	public static void main(String[] args) {
		
		String[] name = {Hong, Choi, Park};
		int[] age = {20, 25, 28};
		double[] grade = {67.8, 78.8, 88.9};
		
		//67.8+78.8+88.9
		
		System.out.println(grade[0] + grade[1] + grade[2]);
		int sum = 0;
		
		for(int i = 0; i<grade.length; i++) {
			sum = sum+grade[i];
		}
		System.out.println(sum);
	

	}

}