package ResponseClasses;

import POJOS.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

public class LoginResponse {
    private User user;
    private boolean validity;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isValidity() {
        return validity;
    }

    public void setValidity(boolean validity) {
        this.validity = validity;
    }
}
