import java.util.Scanner;
import java.util.Random;
class Time{
       private int hour;
       private int min;
       private int sec;
       
       public void setTime(int h,int m,int s){
                hour = (h>=0 && h <= 24)?h:0;
                min = (m>=0 && m <= 60)?m:0;
                sec = (s>=0 && s <= 60)?s:0;
       }
       
       public String toString(){
                return String.format("%2d:%2d:%2d",hour,min,sec);
       }
       
       public String toRegString(){
                return String.format("%d:%2d:%2d %s",(hour==0 || hour==12)?hour:hour%12,min,sec,(hour>=12 ?"PM":"AM"));
       }

}


class Tanisha{
        public static void main(String args[]){
              
             Time t = new Time();
             t.setTime(23,56,89);
             System.out.println(t.toString());
             System.out.println(t.toRegString());
                
        }
        
}
