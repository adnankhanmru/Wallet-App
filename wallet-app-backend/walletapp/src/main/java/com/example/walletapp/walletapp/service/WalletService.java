//package com.example.walletapp.walletapp.service;
//
//import com.example.walletapp.walletapp.model.Wallet;
//import com.example.walletapp.walletapp.repository.WalletRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class WalletService {
//
//    @Autowired
//    private WalletRepository walletRepository;
//
//    public List<Wallet> getAllWallets() {
//        return walletRepository.findAll();
//    }
//
//    public Wallet getWalletById(Long id) {
//        return walletRepository.findById(id).orElse(null);
//    }
//
//    public Wallet createWallet(Wallet wallet) {
//        return walletRepository.save(wallet);
//    }
//
//    public Wallet updateWallet(Long id, Wallet wallet) {
//        Wallet existingWallet = walletRepository.findById(id).orElse(null);
//        if (existingWallet != null) {
//            existingWallet.setOwner(wallet.getOwner());
//            existingWallet.setBalance(wallet.getBalance());
//            return walletRepository.save(existingWallet);
//        }
//        return null;
//    }
//
//    public void deleteWallet(Long id) {
//        walletRepository.deleteById(id);
//    }
//}
