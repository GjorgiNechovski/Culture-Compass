package mk.dians.finki.backend.web;

import jakarta.servlet.http.HttpSession;
import mk.dians.finki.backend.model.User;
import mk.dians.finki.backend.model.exceptions.PasswordsNotMatching;
import mk.dians.finki.backend.model.exceptions.WrongCredentials;
import mk.dians.finki.backend.service.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerNewUser(
            @RequestParam String username,
            @RequestParam String email,
            @RequestParam String name,
            @RequestParam String password,
            @RequestParam String confirmPassword){

        try {
            authenticationService.registerNewUser(username, email, name, password, confirmPassword);
        }
        catch (PasswordsNotMatching e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(true);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(
            @RequestParam String email,
            @RequestParam String password,
            HttpSession session){
        User user;
        try {
            user =  authenticationService.login(email, password);
        }
        catch (WrongCredentials e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        session.setAttribute("user", user);
        return ResponseEntity.ok(true);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpSession session){
        session.removeAttribute("user");

        return ResponseEntity.ok().build();
    }

    @GetMapping("/currentUser")
    public ResponseEntity<Object> getCurrentUser(HttpSession session){
        User user = (User) session.getAttribute("user");

        return ResponseEntity.ok().body(user);
    }
}
