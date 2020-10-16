public class Morning1016 {
    public static void main(String[] args) {
        System.out.println("Java Sample");

        int[][] regAry = new int[5][5];
        int cnt = 1;

        for(int i=0; i<5; i++) {
            for(int j=0; j<5; j++) {
                regAry[i][j] = cnt++;
            }
        }
        // 값을 출력.
        for(int i=0; i<5; i++) {
            for(int j=0; j<5; j++) {
                System.out.printf("%3d" , regAry[i][j]);
            }
            System.out.println();
        }
    }
}