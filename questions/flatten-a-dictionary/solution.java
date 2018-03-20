import java.util.*;

class Solution {
  static HashMap<String,Object> objectToHashMap(Object o) {
    HashMap x = (HashMap<Integer, String>)o;
    return x;
   }
    static HashMap<String, String> flattenDictionary(HashMap<String, Object> dict) {
    HashMap<String, String> flatDict = new HashMap<String, String>();
    helper("", dict, flatDict);

    return flatDict;
  }
  static void helper(String initialKey, HashMap<String,Object> dict, HashMap<String,String> flatDict) {
    for (String key: dict.keySet()) {
      Object value = dict.get(key);
      if (!(value instanceof HashMap<?,?>)) {
        if (key=="" || initialKey=="" || initialKey==null) {
          flatDict.put(key+initialKey, ""+value);
        } else {
          flatDict.put(initialKey+"."+key, ""+value);
        }
      } else {
        if (key=="" || initialKey=="" || initialKey==null) {
          helper(key, objectToHashMap(value), flatDict);
        } else {
          helper(initialKey+"."+key, objectToHashMap(value), flatDict);
        }
      }
    }
  }

  public static void main(String[] args) {
  }
}
