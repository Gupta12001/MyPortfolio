import java.util.Scanner;

public class HCFNumber {

    public static void main(String args[]) {

        Scanner in = new Scanner(System.in);
        System.out.println("Enter the first Mumber");

        int a = in.nextInt();

        System.out.println("Enter the second Number");

        int b = in.nextInt();

        int hcf = 0;

        for (int i = 1; i <= a || i <= b; i++) {
            if (a % i == 0 && b % i == 0)
                hcf = i;
        }

        System.out.println("HCF values is " + hcf);
    }
}
