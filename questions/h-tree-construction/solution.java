class Main {
  static public String roundCoord(double[] x) {
    String y = Math.round(x[0]*100.0)/100.0 + ", " + Math.round(x[1]*100.0)/100.0;
    return y;
  }

  static public void drawLine(double[] x,double[] y) {
    System.out.println("("+roundCoord(x)+") - ("+roundCoord(y)+")");
  }

  static public void drawHTree(double[] c, double l, int d) {
    drawLine(new double[] {c[0]-l/2.0,c[1]}, new double[] {c[0]+l/2.0,c[1]});
    drawLine(new double[] {c[0]-l/2.0,c[1]+l/2.0}, new double[] {c[0]-l/2.0,c[1]-l/2.0});
    drawLine(new double[] {c[0]+l/2.0,c[1]+l/2.0}, new double[] {c[0]+l/2.0,c[1]-l/2.0});
    System.out.println("drew H tree Centered at: "+roundCoord(c));

    if (d>1) {
      drawHTree(new double[] {c[0]-l/2.0,c[1]+l/2.0}, l/Math.pow(2,0.5), d-1);
      drawHTree(new double[] {c[0]-l/2.0,c[1]-l/2.0}, l/Math.pow(2,0.5), d-1);
      drawHTree(new double[] {c[0]+l/2.0,c[1]+l/2.0}, l/Math.pow(2,0.5), d-1);
      drawHTree(new double[] {c[0]-l/2.0,c[1]-l/2.0}, l/Math.pow(2,0.5), d-1);
    }

  }
  static public void main( String args[] ) {
    drawHTree(new double[] {0,0}, 2, 2);
  }
}
